import React from 'react'
import {configure,shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'

configure({adapter:new Adapter()})

let wrapper
beforeEach(()=> wrapper = shallow(<NavigationItems/>))

describe('<NavigationItems/>',()=>{
    it('should render TWO NavigationItem if the user is NOT authenticated',()=>{
        expect(wrapper.find(NavigationItem)).toHaveLength(2)
    })
    it('should render Three NavigationItem if the user is authenticated',()=>{
        wrapper.setProps({isAuthenticated:true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    })
    it('should return true if when user is authenticated, there will be an element exactly like there is in the contain() method',()=>{
        wrapper.setProps({isAuthenticated:true})
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true)
    })
})