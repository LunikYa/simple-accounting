import callApi from './callApi'

const get = async (id = '') => {
  const response = await callApi(`account`)

  return response.payload
}

export default { get }
