const rewire = require("rewire")
const index_vr = rewire("./index.vr")
const WorldTour = index_vr.__get__("WorldTour")
// @ponicode
describe("toggleMenu", () => {
    let inst

    beforeEach(() => {
        inst = new WorldTour()
    })

    test("0", () => {
        let callFunction = () => {
            inst.toggleMenu()
        }
    
        expect(callFunction).not.toThrow()
    })
})
