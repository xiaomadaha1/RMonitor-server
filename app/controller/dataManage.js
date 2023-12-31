'use strict'
const { Controller } = require('egg');

class dataManage extends Controller {
    async addData() {
        const { ctx } = this
        const res = await ctx.service.testdb.addData(ctx.request.body)
        ctx.body = {
            status: 200,
            msg: "添加成功"
        }
    }
    async delData() {
        const { ctx } = this
        const params = {
            id: parseInt(ctx.query.id)
        }
        const res = await ctx.service.testdb.delData(params)

        if (res) {
            ctx.body = {
                status: 200,
                msg: "删除成功"
            }
        } else {
            ctx.body = "del-fail"
        }
    }
    async updateData() {
        const { ctx } = this
        const res = await ctx.service.testdb.updateData(ctx.request.body)
        if (res) {
            ctx.body = {
                status: 200,
                msg: "修改成功"
            }
        } else {
            ctx.body = "update fail"
        }

    }
    async getData() {
        const { ctx } = this
        const res = await ctx.service.testdb.getData();
        ctx.body = {
            code: 200,
            msg: "操作成功",
            data: res
        }
    }
}
module.exports = dataManage;