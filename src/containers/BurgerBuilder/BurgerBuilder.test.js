import React from 'react'
import {configure,shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {BurgerBuilder} from './BurgerBuilder'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

configure({adapter:new Adapter()})
let wrapper
beforeEach(()=> wrapper = shallow(<BurgerBuilder onInitIngredients={()=>{}}/>))

describe('<BurgerBuilder/>',()=>{
    it('should return Length is ONE if we have any ingredient',()=>{
        wrapper.setProps({ings:{salad:1}})
        expect(wrapper.find(BuildControls)).toHaveLength(1)
    })
})