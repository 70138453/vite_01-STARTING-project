import { CORE_CONCEPTS } from './data';
import Header from './assets/Header/Header';
import TabButton from './assets/TabButton/TabButton';
import CoreConcepts from './assets/CoreConcept/CoreConcept';
import state from './assets/state-mgmt.png';
import jsx from './assets/jsx-ui.png';
import config from './assets/config.png';
// import component from './assets/CoreConcept';
function App() {
  //console.log(CORE_CONCEPT[0])
  return(
    <div>
      {}
      <Header />
      <main>
        <section id='core-concept'>
          <h2>core concept</h2>
          <ul>
            {/* <CoreConcept {...CORE_CONCEPT[0]}/>
             <CoreConcept {...CORE_CONCEPT[1]}/>
             <CoreConcept {...CORE_CONCEPT[2]}/>
             <CoreConcept {...CORE_CONCEPT[3]}/>
            */}
            { CORE_CONCEPTS.map(
              (concept)=>(
                <CoreConcepts key={concept.title}{...concept}/>
              )
            )
            }
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
<menu>
  <TabButton >Component</TabButton>
  <TabButton >Hooks</TabButton>
  <TabButton >state</TabButton>
  <TabButton >jsk</TabButton>
</menu>
        </section>
      </main>
    </div>
  );
}
export default App;
