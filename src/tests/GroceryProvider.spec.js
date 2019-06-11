import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import {GroceryProvider} from '../Components/GroceryProvider'
configure({ adapter: new Adapter() });

describe("Grocery Provider test",()=>{

    it("should render the Grocery Provider component",()=>{
        const Component=mount(<GroceryProvider />)
        expect(Component.exists()).toBeTruthy();
    })

    it("should render the text List",()=>{
        const Component=mount(<GroceryProvider />)
        expect(Component.find("#text").exists());
    })

    it("should find the button on dom",()=>{
        const Component=mount(<GroceryProvider />)
        expect(Component.find("#updown").text=="Down");
    })

    it("should find the button on dom and click it",()=>{
        const Component=mount(<GroceryProvider />)
        Component.find("#updown").at(0).simulate("click");
        expect(Component.find("#updown").text=="Up");

    })
   


})