import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMIOS } from '../tetrominos';

const Cell = ({ type }) => (
    <StyledCell type={type} color={TETROMIOS[type].color} />
)

export default React.memo(Cell);