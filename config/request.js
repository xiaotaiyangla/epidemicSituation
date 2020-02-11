/**
 * Created by Lacey on 2019/5/7.
 */
export const Ajax = {
    httpRequest(urls, types, datas, header) {
        let r = new Promise((reslove, reject) => {
            // 本地
            // let url = "http://192.168.1.115:9210" + urls
            let url = "http://58.215.29.8:9210" + urls
            if (window.api) {
                api.ajax({
                    url: url,
                    method: types,
                    headers: header,
                    data: {
                        values: datas
                    }
                }, function (r, e) {
                    if (r) {
                        if (r.data === 'null') {
                            this.$message(r.ErrorInfo || '网络错误');
                            reject(r)
                        } else {
                            reslove(r)
                        }
                    } else {
                        reject(e);
                    }
                });
            } else {
                axios.request({
                    method: types,
                    url: url,
                    data: datas
                }).then(r => {
                    if (r.data.data === 'null') {
                        this.$message(r.ErrorInfo || '网络错误');
                        reject(r.data)
                    } else {
                        reslove(r.data)
                    }
                }).catch(e => {
                    reject(e)
                });
            }
        });
        return r;
    },

    toClickRequest(url, code, path) {
        if(!path){
            return;
        }
        this.$router.push(path)
        let fc;
        if (window.api) {
            fc = {"code": code}
        } else {
            fc = new URLSearchParams();
            fc.append('code', code)
        }
        this.httpRequest(url, "post", fc)
            .then(res => {
                if(res.data !== "null") {
                    console.log(JSON.stringify(res));
                }
            }).catch(function (error) {
            console.log(error);
        });
    },
}