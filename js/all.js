import "./bootstrap";
import project from "../json/project.json";
import about from "../json/about.json";
import blogs from "../json/blogs.json"

window.projects=function projects() {
  return {
    projects: project,
  };
}
window.aboutus = function aboutus() {
  return {
    aboutus: about
  };
};

window.article = function article() {
  return {
    articles: blogs,
    
  };
};
