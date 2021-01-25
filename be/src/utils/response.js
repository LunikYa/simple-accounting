import moment from 'moment'

export function resolve(ctx, data) {
  ctx.response.status = 200
  ctx.response.body = {
    success: true,
    date: moment.utc().toISOString(),
    status: 200,
    data,
  }
}

export function reject(ctx, status, message) {
  ctx.response.status = status
  ctx.response.body = {
    success: false,
    date: moment.utc().toISOString(),
    status,
    data: {
      message,
    },
  }
}
