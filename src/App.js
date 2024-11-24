import Parent from "./components/Parent.jsx";
import DataTable from "./components/DataTable.jsx";
import UseEffectHook from "./components/UseEffectHook.jsx";

const App = () => {
    const table1 = [
      {name: "Rishi", designation: "Engineer"},
      {name: "Skanda", designation: "Doctor"},
      {name: "Shreyank", designation: "waste"},
    ]

    const table2 = [
      {name: "R", designation: "Engi"},
      {name: "S", designation: "Doc"},
      {name: "S", designation: "waste"},
    ]


    return (
        <>  
          <div className="App">
            <DataTable data={table1} />
            <br></br>
            <DataTable data={table2} />
            <br></br>
            <UseEffectHook />
          </div>
        </>
    )
};

export default App;