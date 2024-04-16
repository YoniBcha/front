<template>
  <div>
    <a-button @click="handleAdd" type="primary" style="margin-bottom: 16px">
      Add a row
    </a-button>
    <a-table
      :components="components"
      :row-class-name="() => 'editable-row'"
      bordered
      :dataSource="dataSource"
      :columns="columns"
    ></a-table>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue';
import { Button, Form, Input, Popconfirm, Table } from 'ant-design-vue';

const EditableContext = Symbol();

const EditableRow = {
  setup(props, { slots }) {
    const form = Form.useForm()[0];

    return () => (
      <Form form={form} component={false}>
        <EditableContext.Provider value={form}>
          <tr>{slots.default()}</tr>
        </EditableContext.Provider>
      </Form>
    );
  },
};

const EditableCell = {
  setup(props) {
    const editing = ref(false);
    const inputRef = ref(null);
    const form = useContext(EditableContext);

    const toggleEdit = () => {
      editing.value = !editing.value;
      form.setFieldsValue({
        [props.dataIndex]: props.record[props.dataIndex],
      });
    };

    const save = async () => {
      try {
        const values = await form.validateFields();
        toggleEdit();
        props.handleSave({
          ...props.record,
          ...values,
        });
      } catch (errInfo) {
        console.log('Save failed:', errInfo);
      }
    };

    return () => {
      let childNode = props.children;
      if (props.editable) {
        childNode = editing.value ? (
          <Form.Item style="margin: 0" name={props.dataIndex} rules={[{ required: true, message: `${props.title} is required.` }]}>
            <Input ref={inputRef} onPressEnter={save} onBlur={save} />
          </Form.Item>
        ) : (
          <div
            class="editable-cell-value-wrap"
            style="padding-right: 24px"
            onClick={toggleEdit}
          >
            {props.children}
          </div>
        );
      }
      return <td {...props.restProps}>{childNode}</td>;
    };
  },
};

const App = {
  setup() {
    const dataSource = reactive([
      {
        key: '0',
        name: 'Edward King 0',
        age: '32',
        address: 'London, Park Lane no. 0',
      },
      {
        key: '1',
        name: 'Edward King 1',
        age: '32',
        address: 'London, Park Lane no. 1',
      },
    ]);

    const count = ref(2);

    const handleDelete = (key) => {
      const newData = dataSource.filter((item) => item.key !== key);
      dataSource.splice(0, dataSource.length, ...newData);
    };

    const defaultColumns = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '30%',
        editable: true,
      },
      {
        title: 'age',
        dataIndex: 'age',
      },
      {
        title: 'address',
        dataIndex: 'address',
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (_, record) =>
          dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record.key)}
            >
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];

    const handleAdd = () => {
      const newData = {
        key: count.value,
        name: `Edward King ${count.value}`,
        age: '32',
        address: `London, Park Lane no. ${count.value}`,
      };
      dataSource.push(newData);
      count.value++;
    };

    const handleSave = (row) => {
      const index = dataSource.findIndex((item) => row.key === item.key);
      if (index > -1) {
        const item = dataSource[index];
        dataSource.splice(index, 1, {
          ...item,
          ...row,
        });
      }
    };

    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };

    const columns = defaultColumns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        slots: { customRender: 'title' },
        customRender: (text, record, index) => (
            <EditableCell
            :record="record"
            :editable="col.editable"
            :dataIndex="col.dataIndex"
            :title="col.title"
            :handleSave="handleSave"
  >
  <template #default="{ text }">
    <span>{{ text }}</span>
  </template>
</EditableCell>
        ),
      };
    });

    return {
      dataSource,
      count,
      handleAdd,
      handleSave,
      components,
      columns,
    };
  },
};
</script>

<style>
.editable-cell {
  position: relative;
}

.editable-cell-value-wrap {
  padding: 5px 12px;
  cursor: pointer;
}

.editable-row:hover .editable-cell-value-wrap {
  padding: 4px 11px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}
</style>
