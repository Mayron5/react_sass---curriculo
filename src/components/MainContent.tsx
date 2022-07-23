import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer'
import ProjectsContainer from './ProjectsContainer';
import TecnologiasContainer from './TecnologiasContainer'

const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer />
      <TecnologiasContainer />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;