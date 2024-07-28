module.exports = (items) =>
	`
    <head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
			integrity="sha512-jnSuA4Ss2PkkikSOLtYs8BlYIeeIK1h99ty4YfvRPAlzr377vr3CXDb7sb7eEEBYjDtcYj+AjBH3FLv5uSJuXg=="
			crossorigin="anonymous"
			referrerpolicy="no-referrer"
		/>
		<title>Document</title>
	</head>
    <body class="bg-dark text-white">
		<div class="container d-flex justify-content-center align-items-center text-center">
			<table class="table table-dark table-hover table-striped-columns">
				<thead>
					<tr>
						<th scope="col" width="20%">id</th>
						<th scope="col" width="60%">Item</th>
						<th scope="col" width="20%">Status</th>
					</tr>
				</thead>
				<tbody>
					${items}
				</tbody>
			</table>
		</div>
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.bundle.min.js"
			integrity="sha512-7Pi/otdlbbCR+LnW+F7PwFcSDJOuUJB3OxtEHbg4vSMvzvJjde4Po1v4BR9Gdc9aXNUNFVUY+SK51wWT8WF0Gg=="
			crossorigin="anonymous"
			referrerpolicy="no-referrer"
		></script>
        </body>
    </html>
    `;
