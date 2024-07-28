module.exports = (id, item, status) =>
	`
        <tr>
			<td scope="row">${id}</td>
			<td>${item}</td>
			<td>${status}</td>
		</tr>
    `;
