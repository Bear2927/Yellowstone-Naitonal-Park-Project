import React, {useState} from "react";

function SubmitForm ({animals, setAnimals}) {
    const [formName, setFormName] = useState("");
    const [formImage, setFormImage] = useState("");
    const [formPopulation, setFormPopulation] = useState("");
    const [formFact, setFormFact] = useState("");

    function handleAddAnimal(){
        const newAnimal = {
          name: formName,
          image: formImage,
          population: formPopulation,
          fact: formFact,
        }
        
        const configObj = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newAnimal)
        }
        
        fetch("/animals", configObj)
        .then(res => res.json())
        .then(animal => setAnimals([...animals, animal]))
        
        setFormImage("")
        setFormName("")
        setFormPopulation("")
        setFormFact("")
    }

    function handleUpdateName(e) {
        setFormName(e.target.value)
    }
  
    function handleUpdatePopulation(e) {
        setFormPopulation(e.target.value)
    }
  
    function handleUpdateFact(e) {
        setFormFact(e.target.value)
    }
  
    function handleUpdateImage(e) {
        setFormImage(e.target.value)
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        handleAddAnimal()
    }

    
    return (
        <div className="form_div">

            <p>Add an animal you would like to see in your time here at the park!</p>
            <form onSubmit={handleSubmit}>
                <h5 className="form">Name</h5>
                <div><input className="form_input" onChange={handleUpdateName} type="text" value={formName} placeholder="game title..."/></div>
                <h5 className="form">Image</h5>
                <div><input className="form_input" onChange={handleUpdateImage} type="text" value={formImage} placeholder="game image url..."/></div>
                <h5 className="form">Population</h5>
                <div><input className="form_input" onChange={handleUpdatePopulation} type="text" value={formPopulation} placeholder="game rating..."/></div>
                <h5 className="form">Fact</h5>
                <div><input className="form_input" onChange={handleUpdateFact} type="text" value={formFact} placeholder="game creator..."/></div>
                <div><button className="form_button" type="submit">SUBMIT</button></div>
            </form>
        </div>
    )
}

export default SubmitForm;