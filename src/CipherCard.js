import React from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import Decrypt from "./Decrypt.js"
import Encrypt from "./Encrypt.js"
import "./styles/CipherCard.css"

export default function CipherCard(props){

    const { EncryptCaesar } = require('./Encrypt.js')
    const { DecryptCaesar } = require('./Decrypt.js')
    
    const [inputText, setInputText] = React.useState("") // input form text
    const [inputKey, setInputKey] = React.useState("") // input form key
    const [outputText, setOutputText] = React.useState("") // output form text

    // TO DO
    // dropdown for the different types of ciphers
    // not showing errors if key input is not valid (before submission)
    // thing to figure out is the brute force output -> coming up with scores and top 10 most likely candidates for the cipher. 
    // text options for output. to upper / to lower. Should be fairly simple implementation. 

    function Decrypt(name, text, key){
        // find out type of cipher, then decrypt with key
        if(inputKey == ""){
            console.log("please input a key")
        }
        else if(inputText == ""){
            console.log("please input text")
        }
        else{
            if(name == "Caesar"){ // switch statement
                setOutputText(DecryptCaesar(text, key))
            }
        }
    }

    function Encrypt(name, text, key){
        // find out type of cipher, then encrypt with key
        if(inputKey == ""){
            console.log("please input a key")
        }
        else if(inputText == ""){
            console.log("please input text")
        }
        else{
            if(name == "Caesar"){
                setOutputText(EncryptCaesar(text, key))
            }
        }
    }
     
    function onInputTextChange(event){
        setInputText(event.target.value)
    }

    function onInputKeyChange(event){
        setInputKey(event.target.value)
    }

    function onOutputTextChange(event){
        setOutputText(event.target.value)
    }

    const dropDown = (
        <ul className="dropdown">
            <li>Caesar Cipher</li>
            <li>Vigenere Cipher</li>
            <li>Atbash Cipher</li>
        </ul>
    )

    const isDropped = false

    return (
            <div className="cipher--card">
                <div className="title--container">
                    <h5 className="title--item">{props.name} Cipher</h5>  
                    <button className="title--item">
                        Select Cipher
                        {isDropped && dropDown}
                    </button>
                    
                </div>
                <textarea className="cipher--input" onChange={onInputTextChange} value={inputText}></textarea>
                <div className="button--container">
                    <button className="cipher--button" onClick={() => Encrypt(props.name, inputText, inputKey)}>Encrypt</button>
                    <button className="cipher--button" onClick={() => Decrypt(props.name, inputText, inputKey)}>Decrypt</button>
                    <label htmlFor="key--input" className="key--label">Key:</label>
                    <input className="key--input" id="key--input" onChange={onInputKeyChange} value={inputKey}></input>
                    <button className="cipher--button">Brute Force</button> 
                </div>
                <h6>Output</h6>
                <textarea className="cipher--input" value={outputText} onChange={onOutputTextChange}></textarea>
            </div>
    )
}