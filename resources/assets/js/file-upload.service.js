function upload(formData) {
	const action = '/upload/audio';

	let config = { timeout: 100000 };

	return axios.post(action, formData, config)
        .then(x = > x.data;
)
}

export { upload }