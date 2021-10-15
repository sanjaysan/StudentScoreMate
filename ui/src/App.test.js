import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// @ponicode
describe("componentWillMount", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getUsers", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.getUsers()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("searchStudentByName", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.searchStudentByName({ target: { value: { toLowerCase: () => "Amazon River Dolphin" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.searchStudentByName({ target: { value: { toLowerCase: () => "La Plata Dolphin" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.searchStudentByName({ target: { value: { toLowerCase: () => "Sei Whale" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.searchStudentByName({ target: { value: { toLowerCase: () => "False Killer Whale" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.searchStudentByName({ target: { value: { toLowerCase: () => "Long-finned Pilot Whale" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.searchStudentByName(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("saveScore", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.saveScore({ target: { value: "Elio", name: 10 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.saveScore({ target: { value: "Elio", name: "Edmond" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.saveScore({ target: { value: "elio@example.com", name: 1 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.saveScore({ target: { value: "elio@example.com", name: 0.0 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.saveScore({ target: { value: "elio@example.com", name: "Jean-Philippe" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.saveScore(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getFile", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", () => {
        let object = [[true, true, false], [false, true, false], [true, false, false]]
        let callFunction = () => {
            inst.getFile({ target: { value: { lastIndexOf: () => 143, substring: () => "This is a Text" }, files: object } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [[false, true, true], [true, true, true], [false, false, false]]
        let callFunction = () => {
            inst.getFile({ target: { value: { lastIndexOf: () => 129, substring: () => "Foo bar" }, files: object } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [[true, false, true], [true, false, false], [false, false, false]]
        let callFunction = () => {
            inst.getFile({ target: { value: { lastIndexOf: () => 135, substring: () => "foo bar" }, files: object } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [[false, true, true], [false, false, true], [false, true, true]]
        let callFunction = () => {
            inst.getFile({ target: { value: { lastIndexOf: () => 135, substring: () => "Hello, world!" }, files: object } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [[false, false, false], [true, true, false], [true, false, true]]
        let callFunction = () => {
            inst.getFile({ target: { value: { lastIndexOf: () => 159, substring: () => "foo bar" }, files: object } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.getFile({ target: { value: { lastIndexOf: () => -Infinity, substring: () => "" }, files: [] } })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleClick", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", () => {
        let object2 = [{ innerText: "http://placeimg.com/640/480/fashion" }, { innerText: "http://placeimg.com/640/480/fashion" }, { innerText: "http://placeimg.com/640/480/fashion" }]
        let object = [{ innerText: "http://placeimg.com/640/480/fashion" }, { innerText: "http://placeimg.com/640/480/fashion" }, { innerText: "http://placeimg.com/640/480/fashion" }]
        let callFunction = () => {
            inst.handleClick({ target: { nodeName: { toLowerCase: () => "False Killer Whale" }, cells: object }, parentNode: { nodeName: { toLowerCase: () => "Sei Whale" }, cells: object2 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object2 = [{ innerText: "http://placeimg.com/640/480/fashion" }, { innerText: "http://placeimg.com/640/480/fashion" }, { innerText: "http://placeimg.com/640/480/fashion" }]
        let object = [{ innerText: "http://placeimg.com/640/480/fashion" }, { innerText: "http://placeimg.com/640/480/fashion" }, { innerText: "http://placeimg.com/640/480/fashion" }]
        let callFunction = () => {
            inst.handleClick({ target: { nodeName: { toLowerCase: () => "Long-finned Pilot Whale" }, cells: object }, parentNode: { nodeName: { toLowerCase: () => "Sei Whale" }, cells: object2 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object2 = [{ innerText: "http://placeimg.com/640/480/fashion" }, { innerText: "http://placeimg.com/640/480/fashion" }, { innerText: "http://placeimg.com/640/480/fashion" }]
        let object = [{ innerText: "http://placeimg.com/640/480/fashion" }, { innerText: "http://placeimg.com/640/480/fashion" }, { innerText: "http://placeimg.com/640/480/fashion" }]
        let callFunction = () => {
            inst.handleClick({ target: { nodeName: { toLowerCase: () => "False Killer Whale" }, cells: object }, parentNode: { nodeName: { toLowerCase: () => "Amazon River Dolphin" }, cells: object2 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object2 = [{ innerText: "http://placeimg.com/640/480/fashion" }, { innerText: "http://placeimg.com/640/480/fashion" }, { innerText: "http://placeimg.com/640/480/fashion" }]
        let object = [{ innerText: "http://placeimg.com/640/480/fashion" }, { innerText: "http://placeimg.com/640/480/fashion" }, { innerText: "http://placeimg.com/640/480/fashion" }]
        let callFunction = () => {
            inst.handleClick({ target: { nodeName: { toLowerCase: () => "False Killer Whale" }, cells: object }, parentNode: { nodeName: { toLowerCase: () => "False Killer Whale" }, cells: object2 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object2 = [{ innerText: "http://placeimg.com/640/480/fashion" }, { innerText: "http://placeimg.com/640/480/fashion" }, { innerText: "http://placeimg.com/640/480/fashion" }]
        let object = [{ innerText: "http://placeimg.com/640/480/fashion" }, { innerText: "http://placeimg.com/640/480/fashion" }, { innerText: "http://placeimg.com/640/480/fashion" }]
        let callFunction = () => {
            inst.handleClick({ target: { nodeName: { toLowerCase: () => "False Killer Whale" }, cells: object }, parentNode: { nodeName: { toLowerCase: () => "Long-finned Pilot Whale" }, cells: object2 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleClick(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exportToCsv", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.exportToCsv()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("addUser", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.addUser({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.addUser({ id: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.addUser({ id: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.addUser({ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.addUser({ id: -Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})
