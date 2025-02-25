/**
 * TagSpaces - universal file and folder organizer
 * Copyright (C) 2017-present TagSpaces UG (haftungsbeschraenkt)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License (version 3) as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */
import AppConfig from '../config';

export default (theme: any) =>
  ({
    panel: {
      height: '100%',
      paddingLeft: 5,
      paddingRight: 5
    },
    fontIcon: {
      color: theme.palette.text.primary
    },
    header: {
      color: theme.palette.text.primary
    },
    icon: {
      margin: theme.spacing(1)
    },
    locationListArea: {
      paddingTop: 0,
      marginTop: 0,
      overflowY: AppConfig.isFirefox ? 'auto' : 'overlay'
    },
    searchArea: {
      paddingTop: 0,
      paddingLeft: 5,
      paddingRight: 5,
      marginTop: 0,
      height: 'calc(100% - 110px)',
      maxHeight: 'calc(100% - 110px)',
      overflowX: 'hidden',
      overflowY: AppConfig.isFirefox ? 'auto' : 'overlay'
    },
    topShadow: {
      borderTop: '1px solid lightgray',
      height: 10,
      boxShadow: '0px -7px 20px 0px rgba(255, 255, 255, 1)'
    },
    listItem: {
      paddingLeft: 0,
      paddingTop: 2,
      paddingBottom: 2,
      paddingRight: 0,
      borderRadius: 5,
      backgroundColor: 'transparent'
    },
    listItemSelected: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 2,
      paddingBottom: 2,
      borderRadius: 5,
      backgroundColor: theme.palette.primary.light
    },
    panelTitle: {
      textTransform: 'uppercase',
      flex: 1,
      paddingLeft: 7,
      paddingTop: 12
    },
    nested: {
      paddingLeft: theme.spacing(4)
    },
    listItemTitleText: {
      fontWeight: 'bold'
    },
    hiddenFileInput: {
      display: 'none'
    },
    toolbar: {
      display: 'flex'
    },
    formControl: {
      width: '100%',
      marginBottom: 10
    },
    mainActionButton: {
      marginTop: 10,
      marginLeft: 0,
      paddingLeft: 8
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    }
  } as any);
