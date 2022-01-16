import React, { PureComponent } from 'react';
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import CounterApp from "../tareas/CounterApp";

describe("Purebas con '<CounterApp />'",()=>{
    
    let wrapper = shallow( <CounterApp /> )
    
    beforeEach(()=>{
        wrapper = shallow( <CounterApp /> )
    })

    test("debe mostrar el <CounterApp /> correctamente",()=>{    
        const wrapper = shallow( <CounterApp /> )
        expect( wrapper ).toMatchSnapshot();
    })

    test("deberia inicializar por defecto en 10", () => {
        const counterText = wrapper.find("h2").text().trim();
        expect( counterText ).toBe("10");
    })

    test("debe de mostrar por defecto el valor 100 cuando se pasa por props",()=>{
        const wrapper = shallow( <CounterApp value={100} /> );
        const counterText = wrapper.find("h2").text().trim();

        expect( counterText ).toBe("100");

    })

    test('debe de incrementar en +1 al clickear el boton '+' ', () => {
        const counterBtn = wrapper.find("button").at(0).simulate("click");
        const counterText = wrapper.find("h2").text().trim();

        expect( counterText ).toBe("11");
    })

    test('debe de incrementar en -1 al clickear el boton '+' ', () => {

        const counterBtn = wrapper.find("button").at(2).simulate("click");
        const counterText = wrapper.find("h2").text().trim();

        expect( counterText ).toBe("9");
    })
    
    test("debe de resetear el value al clickear el boton 'reset' ", () => {
        const wrapper = shallow(<CounterApp value={ 100 }/>);

        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(1).simulate("click");

        const counterText = wrapper.find("h2").text().trim();

        expect( counterText ).toBe("100");
    })
    
    
})