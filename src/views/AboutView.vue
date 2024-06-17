<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="table">
      <el-table :data="student" :default-sort="{ prop: 'userID', order: 'ascending' }" max-height="250"
        style="width: 100%">
        <el-table-column type="index" width="50" />
        <el-table-column prop="userID" label="UserID" sortable width="180"></el-table-column>
        <el-table-column prop="userName" label="UserName" width="180"></el-table-column>
        <el-table-column prop="count" label="Count">{{ $store.state.count }}</el-table-column>
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="detailClick">
              Detail
            </el-button>
            <el-button link type="primary" size="small" @click="editClick">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      student: [],
    }
  },
  mounted() {
    this.axios
      .get("data.json")
      .then((res) => {
        console.log('res.data：')
        console.log(res.data)
        this.student = res.data.users
        console.log('this.student：')
        console.log(this.student)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    detailClick() {
      alert("details")
    },
    editClick() {
      alert("edit")
    }
  }
}
</script>

<style scoped>
.about {
  padding: 20px;
  background-color: #f9f9f9;
}

.about h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

.table {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 50px 100px;
}

.el-table {
  width: 100%;
}

.el-table .el-button {
  margin-right: 5px;
}

.el-button.link {
  padding: 0;
  font-size: 14px;
  color: #409EFF;
  cursor: pointer;
}

.el-button.link:hover {
  color: #66b1ff;
}
</style>
