import callApi from './callApi'

const get = async (id = '') => {
  const response = await callApi(`transaction/${id}`)

  return response.payload
}

const post = async (body) => {
  const response = await callApi(`transaction/`, {
    method: 'POST',
    body,
  })

  return response.payload
}

export default { post, get }
