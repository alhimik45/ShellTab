# *-* coding: utf-8 *-*
# This file is part of butterfly
#
# butterfly Copyright (C) 2014  Florian Mounier
# ShellTab Copyright (C) 2015 Alexey Kolpakov
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>
buff = []
term = null
term_serv = null

$ = document.querySelectorAll.bind(document)

lt_calls = {}

lt_calls.start_pty = (pty) ->
  term_serv = pty.fork process.env.SHELL || 'sh', [], {
    name: if require('fs').existsSync('/usr/share/terminfo/x/xterm-256color')
    then 'xterm-256color'
    else 'xterm',
    cols: 80,
    rows: 24,
    cwd: process.env.HOME
  }
  term_serv.on 'data', (data)->
    if term then term.write(data) else  buff.push(data)

  send = (data) ->
    term_serv.write(data)

  ctl = (type, cols, rows) ->
    if type == 'Resize'
      term_serv.resize(cols,rows)

  term = new Terminal $('#wrapper')[0], send, ctl
  term_serv.resize(term.cols, term.rows)
  while (buff.length)
    term.write(buff.shift())
  window.butterfly = term

lt_calls.disable_pty = () ->
  term_serv.destroy()

window.lighttable_calls = lt_calls
