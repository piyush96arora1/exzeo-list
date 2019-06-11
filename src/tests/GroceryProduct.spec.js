import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import {GroceryProduct} from '../Components/GroceryProduct'
configure({ adapter: new Adapter() });

describe("Grocery Products test",()=>{

    it("should render the component",()=>{
        const GroceryCom=mount(<GroceryProduct name="Product" votes={54}/>)
        expect(GroceryCom.exists()).toBeTruthy();
    })


})