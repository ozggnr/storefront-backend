import { OrderDB} from '../orders-model';

const order = new OrderDB()

describe("Order", () => {
    it('should have a show method', () => {
        expect(order.show).toBeDefined()
    })

	it('show method should not display complete user orders', async () => {
		const result = await order.show('1')
		expect(result.statusOfOrder).not.toBe('Complete')
	})
})