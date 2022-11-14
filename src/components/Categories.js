import React, { Component, useState }  from 'react';
import { Route, Link, Routes, useParams } from 'react-router-dom';
import dogList from "../dogList.json"
import { useRef } from "react"
import propTypes from 'prop-types'
import DogIcon from './DogIcon';
import { GoSearch } from "react-icons/go";
import Display from './Display';


const Categories = () => {

    const [current, setCurrent] = useState("Herding");
    const [dogName, setName] = useState("");
    const [searchKey, setSearchKey] = useState("")

    const handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    };
    
    return (

        <div>
            <div className='Categories'>
                <h1 className="categoryTitle">CATEGORIES</h1>
                <div className='searchSection'> 
                    <input className="searchBar" 
                           type="search" 
                           placeholder="Search" 
                           onChange={(event) => {
                               setSearchKey(event.target.value);
                           }}
                           >
                              
                    </input> 

                    {searchKey === ""? (
                            <div>
                                <button className='search'><GoSearch/></button>
                            </div>
                    ):(
                        <Link to={`/search/${searchKey}`}>

                            <div>
                                <button className='search' type="submit" onClick={(event) => setSearchKey(event.target.value)}  ><GoSearch/></button>

                            </div>
                        </Link>
                    )}
                    
                </div>
               
                <div className="categoryTabs">
                    <button className="tabs" id={current === 'Herding'? 'active' : 'inactive'} onClick={() => setCurrent('Herding')}>HERDING</button>
                    <button className="tabs" id={current === 'Hound'? 'active' : 'inactive'} onClick={() => setCurrent('Hound')}>HOUND</button>
                    <button className="tabs" id={current === 'Sporting'? 'active' : 'inactive'} onClick={() => setCurrent('Sporting')}>SPORTING</button>
                    <button className="tabs" id={current === 'NonSporting'? 'active' : 'inactive'} onClick={() => setCurrent('NonSporting')}>NON-SPORTING</button>
                    <button className="tabs" id={current === 'Working'? 'active' : 'inactive'} onClick={() => setCurrent('Working')}>WORKING</button>
                    <button className="tabs" id={current === 'Terrier'? 'active' : 'inactive'} onClick={() => setCurrent('Terrier')}>TERRIER</button>
                    <button className="tabs" id={current === 'Toy'? 'active' : 'inactive'} onClick={() => setCurrent('Toy')}>TOY</button>
                </div>

                <div className='iconMargin'>
                    <div className='groupIcons'> {
                        dogList.filter(dog => dog.breed == current).map(filteredDog => (
                            
                        <Link to={`/display/${filteredDog.name}`}>

                            <div onClick={() => setName(filteredDog.name)}>
                                <DogIcon name={filteredDog.name} url={filteredDog.url}/>
                            </div>

                        </Link>

                    ))}
                    </div>
                </div>
                <div className="categoryCircle"></div>
            </div>
        </div>
    )
}

export default Categories


