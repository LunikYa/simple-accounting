import config from '../config'

const callApi = async (path, options = {}) => {
  const { headers, method = 'GET', body } = options
  const url = `${config.API_URL}/${path}`

  let requestBody

  if (body) {
    requestBody = JSON.stringify(body)
  }

  const response = await fetch(url, {
    method,
    headers: headers || {
      'Content-Type': 'application/json',
    },
    body: requestBody,
  })

  let payload
  try {
    const { data } = await response.json()
    payload = data
  } catch {
    payload = {}
  }
  const responseObject = {
    status: response.status,
    ok: response.status >= 200 && response.status < 400,
    payload,
  }

  if (!responseObject.ok) {
    throw responseObject
  }

  return responseObject
}

export default callApi
