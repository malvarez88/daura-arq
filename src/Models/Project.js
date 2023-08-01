export default class Project {
    constructor(project) {
        this.index = project.index;
        this.ref = project.ref;
        this.short = project.short;
        this.title = project.title;
        this.category = project.category;
        this.location = project.location;
        this.surface = project.surface;
        this.promoter = project.promoter;
        this.team = project.team;
        this.promoter = project.promoter;
        this.photographer = project.photographer;
        this.order = project.order;
        this.year = project.year;
        this.images = project.images;
        this.year = project.year;
    }
};

/* 
export default class Project {
    constructor(project) {
        this.index = project.attributes.orden;
        this.ref = project.attributes.referencia;
        this.short = project.attributes.nombre;
        this.title = project.attributes.title;
        this.category = project.attributes.category;
        this.location = project.attributes.location;
        this.surface = project.attributes.surface;
        this.promoter = project.attributes.promoter;
        this.team = project.attributes.team;
        this.promoter = project.attributes.promoter;
        this.photographer = project.attributes.photographer;
        this.order = project.attributes.order;
        this.year = project.attributes.year;
        this.images = project.attributes.images;
        this.year = project.attributes.year;
    }
}; */