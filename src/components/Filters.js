import React from 'react'
import Header from './Header'

function Filters () {
  return (
    <div>
      <div className="back-ground-show" />
      <Header />
      <div className="context-menu-filter-open">
        <form id="contextMenuFilter" method="post">
          <button type="button">Скопировать адрес</button>
          <button type="submit">Изменить</button>
          <button type="button" className="del-filter" data-type="local">
            Удалить
          </button>
        </form>
      </div>
      <div className="blockAlert" id="blockAlert" style={{ display: 'none' }}>
        Сейчас нельзя это выполнить!
      </div>
      <div id="main">
        <section id="filters" className="page">
          <div className="container">
            <h2>УПРАВЛЕНИЕ ФИЛЬТРАМИ</h2>
            <div className="left-column-25">
              <div className="container-nested">
                <div className="filter-categories">
                  <ul>
                    <h5>Общие фильтры</h5>
                    <li>
                      <input type="radio" id="public-filter" name="radio2" />
                      <label htmlFor="public-filter">Публичные фильтры</label>
                    </li>
                    <h5>Личные фильтры</h5>
                    <li>
                      <input
                        type="radio"
                        id="private-my-filter"
                        name="radio2"
                      />
                      <label htmlFor="private-my-filter">Личные фильтры</label>
                    </li>
                    <li>
                      <input type="radio" id="public-my-filter" name="radio2" />
                      <label htmlFor="public-my-filter">
                        Публичные фильтры
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="filter-list">
                  <div className="search-filters">
                    <label htmlFor="search-filters">
                      <input
                        type="search"
                        id="search-filters"
                        placeholder="Поиск..."
                      />
                    </label>
                  </div>
                  <hr className="hr-dashed-left" />
                  <div className="filters">
                    <form id="form-filters" method="post">
                      {/* ЗАПОЛНЯЕМ ИЗ БД */}
                      <div>
                        <button
                          type="submit"
                          className="context-menu-filter"
                          data-type="local"
                        >
                          фильтр1
                        </button>{' '}
                        {/* SUBMIT */}
                        <button
                          type="button"
                          className="context-menu-filter"
                          data-type="publiclocal"
                        >
                          фильтр2
                        </button>{' '}
                        {/* BUTTON */}
                        <button
                          type="button"
                          className="context-menu-filter"
                          data-type="local"
                        >
                          фильтр3
                        </button>
                        <button
                          type="button"
                          className="context-menu-filter"
                          data-type="public"
                        >
                          фильтр4
                        </button>
                        <button
                          type="button"
                          className="context-menu-filter"
                          data-type="publiclocal"
                        >
                          фильтр5
                        </button>
                        <button
                          type="button"
                          className="context-menu-filter"
                          data-type="local"
                        >
                          фильтр6
                        </button>
                        <button
                          type="button"
                          className="context-menu-filter"
                          data-type="public"
                        >
                          фильтр7
                        </button>
                        <button
                          type="button"
                          className="context-menu-filter"
                          data-type="local"
                        >
                          фильтр8
                        </button>
                      </div>
                      <div id="nonresultfilter">Нет результатов</div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-column-75">
              <div className="container-nested">
                <form id="filter-settings" name="filterSettings" method="post">
                  <label htmlFor="input-name-filter">
                    <input
                      type="text"
                      id="input-name-filter"
                      name="inputNameFilter"
                      placeholder="Название фильтра"
                    />
                  </label>
                  <div className="block-input-cle">
                    <div className="input-cle" id="blockInputCLE">
                      Логическое выражение
                    </div>
                    <label htmlFor="input-cle">
                      <input
                        type="text"
                        id="input-cle"
                        readOnly
                        style={{ display: 'none' }}
                      />
                    </label>
                    <div className="clear-cle">
                      <button type="button">Стереть</button>
                    </div>
                  </div>
                  <div className="block-search">
                    <div className="inline-container">
                      <div>
                        <label htmlFor="search-tag-for-filter">
                          <input
                            type="search"
                            id="search-tag-for-filter"
                            placeholder="Поиск тегов..."
                          />
                        </label>
                      </div>
                      <div>
                        <div className="select">
                          <label htmlFor="select-dropdown" />
                          <select id="select-dropdown">
                            <option value="Все теги">Все теги</option>
                            <option value="Личные теги">Личные теги</option>
                            <option value="Общие теги">Общие теги</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container-tags">
                    <div className="list-tags-for-filter">
                      {/* ЗАПОЛНЯЕМ ИЗ БД */}
                      <button type="button" data-type="public">
                        tag1
                      </button>
                      <button type="button" data-type="local">
                        Мой тег
                      </button>
                      <button type="button" data-type="public">
                        tag
                      </button>
                      <button type="button" data-type="local">
                        ttagag
                      </button>
                      <button type="button" data-type="local">
                        tag2
                      </button>
                      <button type="button" data-type="local">
                        tatagg3
                      </button>
                      <button type="button" data-type="publiclocal">
                        tag4
                      </button>
                      <button type="button" data-type="local">
                        tagtagttagtagag
                      </button>
                      <button type="button" data-type="public">
                        tagtag
                      </button>
                      <button type="button" data-type="local">
                        tatagtagtagg
                      </button>
                      <button type="button" data-type="publiclocal">
                        tagtagtagg
                      </button>
                      <button type="button" data-type="local">
                        tagtdsfsdfsdfsagtagtag
                      </button>
                      <div id="nonresulttagforfilter">Нет результатов</div>
                    </div>
                    <div className="list-operators-for-filter">
                      <div className="logical-operator">
                        <div className="inline-btn">
                          <button type="button" id="lbracket-operator">
                            (
                          </button>
                          <button type="button" id="rbracket-operator">
                            )
                          </button>
                        </div>
                        <button type="button" id="and-operator">
                          AND
                        </button>
                        <button type="button" id="or-operator">
                          OR
                        </button>
                        <button type="button" id="not-operator">
                          NOT
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="button-panel">
                    <input
                      className="checkbox"
                      type="checkbox"
                      id="public-filter-option"
                      defaultValue="yes"
                    />
                    <label htmlFor="public-filter-option">
                      Публичный фильтр
                    </label>
                    <button type="submit" className="but" value="Предпросмотр">
                      Предпросмотр
                    </button>
                    <button type="submit" className="but" value="Отмена">
                      Отмена
                    </button>
                    <button
                      type="submit"
                      className="but"
                      value="Создать фильтр"
                    >
                      Создать фильтр
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="deleted-filter">
              <div className="container-nested">
                <form
                  id="deleted-filter-tag"
                  name="deleted-filter-tag"
                  method="post"
                >
                  Вы действительно хотите удалить данный фильтр?
                  <div className="button-panel">
                    <input
                      type="button"
                      id="close-del-filter"
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

export default Filters
