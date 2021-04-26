export const setStatusBar = (title: string) => {
	switch (title) {
		case "Resgate":
			return <p>Solicitada</p>;
		case "Movimentação interna":
			return <p className="center">Processando</p>;
		case "Depósito":
			return <p className="right">Concluída</p>;
		default:
			return <p className="center">{title}</p>;
	}
};
