import React, { Component } from 'react'
import { Container } from './components/container';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from './Themes/DarkThemes';
import { Dropdown } from './components/dropdown';
import {Heading1, Heading2, Heading3, Heading4, Heading5} from "./components/heading";
import { TextField } from './components/textfield';
import { Button } from './components/button';
import { Table, Tr, Td, Th, Tbody, Thead } from './components/table';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import { connect } from 'react-redux';
import {actAddTask, actChangeTheme} from "./reducer/action";
import {arrTheme} from "./Themes/themeManager"

class ToDoList extends Component {

    state = {
        taskName: "",
    }

    renderTaskToDo = () => {
        return this.props.taskList.filter(task => !task.done).map((task, index) => {
            return (
                <Tr key={index}>
                    <Th>{task.taskName}</Th>
                    <Th className="text-right">
                        <Button className="ml-1"><i className="fa fa-edit"></i></Button>
                        <Button className="ml-1"><i className="fa fa-check"></i></Button>
                        <Button className="ml-1"><i className="fa fa-trash"></i></Button>
                    </Th>
                </Tr>
            )
        })
    }

    renderTaskComplete = () => {
        return this.props.taskList.filter(task => task.done).map((task, index) => {
            return (
                <Tr key={index}>
                    <Th>{task.taskName}</Th>
                    <Th className="text-right">
                        <Button className="ml-1"><i className="fa fa-trash"></i></Button>
                    </Th>
                </Tr>
            )
        })
    }

    //viết hàm render theme import themeManager
    rendeTheme = () => {
        return arrTheme.map((theme, index) => {
            return <option value={theme.id}>{theme.name}</option>
        })
    }

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Container className="w-50">
                    <Dropdown onChange={(event) => {
                        let {value} = event.target;
                        this.props.dispatch(actChangeTheme(value));
                    }}>
                        {this.rendeTheme()}
                    </Dropdown>
                    <Heading3>To Do List</Heading3>
                    <TextField 
                        label="Task name" 
                        className="w-50" 
                        name="taskName"
                        onChange={(event) => {
                            this.setState({
                                taskName: event.target.value,
                            })
                        }}
                    />
                    <Button 
                        className="ml-2"
                        onClick={() => {
                            //Thấy thông tin từ input
                            let {taskName} = this.state;
                            //Tạo ra 1 task object
                            let newtask = {
                                id: Date.now(),
                                taskName,
                                done: false
                            }
                            //Đưa task object lên redux thông qua phương thức dispatch
                            this.props.dispatch(actAddTask(newtask))
                        }}>
                            <i className="fa fa-plus"></i> 
                            Add task
                    </Button>
                    <Button className="ml-2"><i className="fa fa-upload"></i> Update task</Button>
                    <hr/>
                    <Heading3>Task To Do</Heading3>
                    <Table>
                        <Thead>
                            {this.renderTaskToDo()}                        
                        </Thead>
                    </Table>

                    <Heading3>Task Complete</Heading3>
                    <Table>
                        <Thead>
                            {this.renderTaskComplete()}
                        </Thead>
                    </Table>
                </Container>
            </ThemeProvider>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.ToDoListReducer.theme,
        taskList: state.ToDoListReducer.taskList,
    }
}

export default connect(mapStateToProps) (ToDoList);
