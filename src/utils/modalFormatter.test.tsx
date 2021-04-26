import { setStatusBar } from "./modalFormatter";

describe("Modal Formatter", () => {
	it("should setStatusBar('Resgate') return 'Solicitada'", () => {
		expect(setStatusBar("Resgate")).toStrictEqual(<p>Solicitada</p>);
	});

	it("should setStatusBar('Movimentação interna') return 'Concluída'", () => {
		expect(setStatusBar("Movimentação interna")).toStrictEqual(<p className="center">Processando</p>);
	});

	it("should setStatusBar('Depósito') return 'Concluída'", () => {
		expect(setStatusBar("Depósito")).toStrictEqual(<p className="right">Concluída</p>);
	});

	it("should setStatusBar('Test') return 'Test'", () => {
		expect(setStatusBar("Test")).toStrictEqual(<p className="center">Test</p>);
	});
});
