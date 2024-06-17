import Notes from './Notes'
const Home = (props) => {
 const {showAlert}=props
  return (
    <div className='home-css'>
      <Notes showAlert={showAlert}/>
    </div>
  );
};

export default Home;
  