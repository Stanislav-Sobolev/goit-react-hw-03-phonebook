import {Component} from "react";
import React from 'react';
import { nanoid } from 'nanoid'
import { HeadTitle,} from "./PhoneBook.styled";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";
import { ContactForm } from "./ContactForm";



export class PhoneBook extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
          ],
        filter: '',
        name: '',
        number: ''
      };

      handleSubmit = (e) => {

        this.setState(prevState => {
            
            const rest = [...prevState.contacts];
            
            rest.push({id: nanoid(), name: e.name, number: e.number})
            
            return {
                contacts: rest
            }
        })
      }

      handleFilter = (e) => {
        this.setState({
            filter: e
        })
      }
    
      getVisibleContacts = () => {
        const {contacts, filter } = this.state;
        const filterToLowerCase = filter.toLowerCase();

        return contacts.filter(el => 
            el.name.toLowerCase().includes(filterToLowerCase))
      }

      render() {

        const visibleContacts = this.getVisibleContacts();

        return (
            <>
            <HeadTitle>Phonebook</HeadTitle>

            <ContactForm 
                initialValues={this.state} 
                onSubmit={this.handleSubmit}/>
          
            <Filter             
                contacts={this.state.contacts} 
                filterState={this.state.filter} 
                handleFilter={this.handleFilter}/>

            <HeadTitle>Contacts</HeadTitle>

            <ContactList 
                filteredArr={visibleContacts} 
           />
          </>
        )
      }
     
}