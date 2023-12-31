import {
	baseUrl
} from './config.js'

export function getTopList() {

	return new Promise((resolve, reject) => {
		uni.request({
			url: `${baseUrl}/toplist/detail`,
			method: 'GET',
			data: {},
			success: res => {
				let result = res.data.list;
				result.length = 4
				resolve(result)
			},
			fail: () => {},
			complete: () => {}
		});
	})
}