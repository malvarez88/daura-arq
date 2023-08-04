/* eslint-disable max-len */
import Project from './Project';

export default class Projects {
  constructor(projects) {
    this.projects = projects?.map((project) => new Project(project));
    this.length = this.projects.length;
  }

  map(callback) {
    return this.projects?.map(callback);
  }

  getSortedPrjects() {
    return this.projects.sort((a, b) => a.index - b.index);
  }

  getCategoryProjects(category) {
    if (category === 'all') return this.getSortedPrjects();
    return this.projects?.filter((project) => project.category === category).sort((a, b) => a.index - b.index);
  }

  getProjectByRef(ref) {
    return this.projects.find((project) => project.ref === ref);
  }
}
