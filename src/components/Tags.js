import React, { useEffect, useState } from 'react'
import Header from './Header'

import axios from 'axios'
import getAuthUser from '../lib/getAuthUser'

const { token } = getAuthUser()

function Tags () {
  const [studets, setStudents] = useState([])

  useEffect(() => {
    axios.get('https://red-team-mailer-back-stg.herokuapp.com/students', {
      headers: {
        authorization: `Bearer ${token}`
      }
    }).then(response => {
      setStudents(response.data.map(student => ({
        fullname: `${student.firstname} ${student.secondname} ${student.patronymic}`.trim(),
        id: student.id
      })))
    })
  }, [])

  return (
    <div>
      <div className="back-ground-show" />
      <Header />
      <div className="context-menu-tag-open">
        <form id="contextMenuTag" method="post">
          <button type="submit">Изменить</button>
          <button type="button" className="del-tag" data-type="local">
            Удалить
          </button>
        </form>
      </div>
      <div id="main">
        <section id="tags" className="page">
          <div className="container">
            <h2>УПРАВЛЕНИЕ ТЕГАМИ</h2>
            <div className="left-column-25">
              <div className="container-nested">
                <div className="tag-categories">
                  <ul>
                    <li>
                      <input type="radio" id="atributes-tag" name="radio1" />
                      <label className="atributes-show" htmlFor="atributes-tag">
                        Атрибуты
                      </label>
                    </li>
                    <h5>Общие теги</h5>
                    <li>
                      <input type="radio" id="public-tag" name="radio1" />
                      <label htmlFor="public-tag">Публичные теги</label>
                    </li>
                    <h5>Личные теги</h5>
                    <li>
                      <input type="radio" id="private-my-tag" name="radio1" />
                      <label htmlFor="private-my-tag">Личные теги</label>
                    </li>
                    <li>
                      <input type="radio" id="public-my-tag" name="radio1" />
                      <label htmlFor="public-my-tag">Публичные теги</label>
                    </li>
                  </ul>
                </div>
                <div className="tag-list">
                  <div className="search-tags">
                    <label htmlFor="search-tag">
                      <input
                        type="search"
                        id="search-tag"
                        placeholder="Поиск..."
                      />
                    </label>
                  </div>
                  <hr className="hr-dashed-left" />
                  <div className="tags">
                    <form id="form-tags" method="post">
                      <ul className="list-tag">
                        <li data-type="public">
                          <input
                            type="radio"
                            id="radio-tag-1"
                            name="radio-tag"
                          />
                          <label
                            className="context-menu-tag"
                            htmlFor="radio-tag-1"
                          >
                            tag1
                            <button className="del-tag" type="button" />
                          </label>
                        </li>
                        <li data-type="local">
                          <input
                            type="radio"
                            id="radio-tag-2"
                            name="radio-tag"
                          />
                          <label
                            className="context-menu-tag"
                            htmlFor="radio-tag-2"
                          >
                            Мой тег
                            <button className="del-tag" type="submit" />
                          </label>
                        </li>
                        <li data-type="public">
                          <input
                            type="radio"
                            id="radio-tag-3"
                            name="radio-tag"
                          />
                          <label
                            className="context-menu-tag"
                            htmlFor="radio-tag-3"
                          >
                            tag
                            <button className="del-tag" type="submit" />
                          </label>
                        </li>
                        <li data-type="local">
                          <input
                            type="radio"
                            id="radio-tag-4"
                            name="radio-tag"
                          />
                          <label
                            className="context-menu-tag"
                            htmlFor="radio-tag-4"
                          >
                            ttagag
                            <button className="del-tag" type="submit" />
                          </label>
                        </li>
                        <li data-type="local">
                          <input
                            type="radio"
                            id="radio-tag-5"
                            name="radio-tag"
                          />
                          <label
                            className="context-menu-tag"
                            htmlFor="radio-tag-5"
                          >
                            tag2
                            <button className="del-tag" type="submit" />
                          </label>
                        </li>
                        <li data-type="local">
                          <input
                            type="radio"
                            id="radio-tag-6"
                            name="radio-tag"
                          />
                          <label
                            className="context-menu-tag"
                            htmlFor="radio-tag-6"
                          >
                            tatagg3
                            <button className="del-tag" type="submit" />
                          </label>
                        </li>
                        <li data-type="publiclocal">
                          <input
                            type="radio"
                            id="radio-tag-7"
                            name="radio-tag"
                          />
                          <label
                            className="context-menu-tag"
                            htmlFor="radio-tag-7"
                          >
                            tag4
                            <button className="del-tag" type="submit" />
                          </label>
                        </li>
                        <li data-type="local">
                          <input
                            type="radio"
                            id="radio-tag-8"
                            name="radio-tag"
                          />
                          <label
                            className="context-menu-tag"
                            htmlFor="radio-tag-8"
                          >
                            tagtagttagtagag
                            <button className="del-tag" type="submit" />
                          </label>
                        </li>
                        <li data-type="public">
                          <input
                            type="radio"
                            id="radio-tag-9"
                            name="radio-tag"
                          />
                          <label
                            className="context-menu-tag"
                            htmlFor="radio-tag-9"
                          >
                            tagtag
                            <button className="del-tag" type="submit" />
                          </label>
                        </li>
                        <li data-type="local">
                          <input
                            type="radio"
                            id="radio-tag-10"
                            name="radio-tag"
                          />
                          <label
                            className="context-menu-tag"
                            htmlFor="radio-tag-10"
                          >
                            tatagtagtagg
                            <button className="del-tag" type="submit" />
                          </label>
                        </li>
                        <li data-type="publiclocal">
                          <input
                            type="radio"
                            id="radio-tag-11"
                            name="radio-tag"
                          />
                          <label
                            className="context-menu-tag"
                            htmlFor="radio-tag-11"
                          >
                            tagtagtagg
                            <button className="del-tag" type="submit" />
                          </label>
                        </li>
                        <li data-type="local">
                          <input
                            type="radio"
                            id="radio-tag-12"
                            name="radio-tag"
                          />
                          <label
                            className="context-menu-tag"
                            htmlFor="radio-tag-12"
                          >
                            tagtdsfsdfsdfsagtagtag
                            <button className="del-tag" type="submit" />
                          </label>
                        </li>
                        <div id="nonresulttag">Нет результатов</div>
                      </ul>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-column-75">
              <div className="container-nested">
                <form id="tag-settings" name="tagSettings" method="post">
                  <div className="block-search">
                    <label htmlFor="search-student">
                      <input
                        type="search"
                        id="search-student"
                        placeholder="Поиск студентов..."
                      />
                    </label>
                  </div>
                  <div className="block-students">
                    <div className="tbl-header">
                      <table>
                        <thead>
                          <tr>
                            <th />
                            <th>Студент</th>
                            <th>Группа</th>
                            <th>Курс</th>
                            <th>Форма обучения</th>
                            <th>Тип программы</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div className="tbl-content">
                      <table id="table-student">
                        <tbody>
                          {studets.map(student => (
                            <tr key={student.id}>
                              <td>
                                <input
                                  className="checkbox"
                                  type="checkbox"
                                  id={`student1${student.id}`}
                                />
                                <label htmlFor={`student1${student.id}`} />
                              </td>
                              <td>{student.fullname}</td>
                              <td>Пока ХЗ</td>
                              <td>Пока ХЗ</td>
                              <td>Пока ХЗ</td>
                              <td>Пока ХЗ</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div id="nonresultstudent">Нет результатов</div>
                    </div>
                  </div>
                  <div className="block-management">
                    <div className="name-tag">
                      <label htmlFor="input-name-tag">
                        <input
                          type="text"
                          id="input-name-tag"
                          placeholder="Название тега"
                        />
                      </label>
                    </div>
                    <div className="panel-management">
                      <button type="button" className="del-student" />
                      <button type="button" className="add-student" />
                    </div>
                  </div>
                  <div className="students-list-in-tag">
                    <div className="tbl-header">
                      <table>
                        <thead>
                          <tr>
                            <th />
                            <th>Студент</th>
                            <th>Группа</th>
                            <th>Курс</th>
                            <th>Форма обучения</th>
                            <th>Тип программы</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div className="tbl-content">
                      <table id="table-student-in-tag">
                        <tbody></tbody>
                      </table>
                    </div>
                  </div>
                  <div className="button-panel">
                    <input
                      className="checkbox"
                      type="checkbox"
                      id="public-tag-option"
                      defaultValue="yes"
                    />
                    <label htmlFor="public-tag-option">Публичный тег</label>
                    <input type="submit" defaultValue="Отмена" />
                    <input type="submit" defaultValue="Создать тег" />
                  </div>
                </form>
              </div>
            </div>
            <div className="right-column-atribut">
              <div className="container-nested">
                <form id="atribut-settings" name="createtag" method="post">
                  <div className="block-search">
                    <label htmlFor="input-name-atribut">
                      <input
                        type="search"
                        id="input-name-atribut"
                        placeholder="Поиск атрибутов..."
                      />
                    </label>
                  </div>
                  <div className="block-atributes">
                    <div className="atributes-list">
                      Атрибуты 1<br />
                      Атрибуты 2<br />
                      Атрибуты 3<br />
                      Атрибуты 4<br />
                      Атрибуты 5<br />
                      Атрибуты 6<br />
                      Атрибуты 7<br />
                      Атрибуты 8<br />
                      Атрибуты 9<br />
                      Атрибуты 10
                      <br />
                      Атрибуты 11
                      <br />
                      Атрибуты 12
                      <br />
                    </div>
                  </div>
                  <div className="button-panel">
                    <input
                      type="button"
                      id="close-atribut"
                      defaultValue="Отмена"
                    />
                    <input type="submit" defaultValue="ОК" />
                  </div>
                </form>
              </div>
            </div>
            <div className="deleted-tag">
              <div className="container-nested">
                <form id="deleted-tag" name="deleted-tag" method="post">
                  Вы действительно хотите удалить данный тег?
                  <div className="button-panel">
                    <input
                      type="button"
                      id="close-del-tag"
                      defaultValue="Отмена"
                    />
                    <input type="submit" defaultValue="Удалить" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Tags
