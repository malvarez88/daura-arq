import React, { useEffect, useState } from 'react';
import './noticias.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';

import { changeDocTitle } from '../../hooks/hooks';
import { axiosInstance } from '../../services/axiosInstance';
import { shortDate } from '../../utils/numbers';

function Noticias() {
  const [news, setNews] = useState(null);
  const { t, i18n } = useTranslation('global');

  const location = t('footer.noticias');
  useEffect(() => {
    changeDocTitle(location);
  }, [location]);

  const locale = i18n.language;

  const getNews = async () => {
    const { data } = await axiosInstance().get(
      `/noticias?populate[foto][fields][0]=url&locale=${locale}&sort=createdAt:desc`,
    );
    setNews(data);
  };

  useEffect(() => {
    getNews();
  }, [locale]);

  const [visibleIndexes, setVisibleIndexes] = useState([]);

  const toggleContent = (index) => {
    if (visibleIndexes.includes(index)) {
      setVisibleIndexes(visibleIndexes.filter((item) => item !== index));
    } else {
      setVisibleIndexes([...visibleIndexes, index]);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200, transition: { duration: 0.2 } }}
            transition={{ duration: 1, delay: 1 }}
            key="noticias"
          >
            <div className="estudio" style={{ marginTop: '30px' }}>
              <div className="noticias">
                <h6 className="title" style={{ marginBottom: '30px' }}>
                  {t('footer.noticias').toUpperCase()}
                </h6>

                {news?.map((n, index) => (
                  <div className="noticia" key={n?.id}>
                    <div className="noticias-img">
                      <img
                        src={n?.attributes?.foto?.data?.attributes?.url}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <p>{shortDate(n?.attributes?.createdAt)}</p>
                    <a href={n?.attributes?.link} target="_blank" rel="noreferrer" style={{ color: 'inherit', cursor: 'pointer' }}><h4>{n?.attributes?.Titulo}</h4></a>
                    <p className="general-text">{n?.attributes?.descripcion}</p>
                    <p
                      className="general-text"
                      style={{
                        opacity: visibleIndexes.includes(index) ? 1 : 0,
                        display: visibleIndexes.includes(index)
                          ? 'block'
                          : 'none',
                        transition: 'opacity 1s ease',
                      }}
                    >
                      <ReactMarkdown>
                        {n?.attributes?.contenido}
                      </ReactMarkdown>
                    </p>
                    <span>
                      <button
                        type="button"
                        onClick={() => toggleContent(index)}
                        style={{
                          border: 'none',
                          outline: 'none',
                          textDecoration: 'underline',
                        }}
                      >
                        {visibleIndexes.includes(index) ? 'OCULTAR' : 'LEE MAS'}
                      </button>
                    </span>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Noticias;
