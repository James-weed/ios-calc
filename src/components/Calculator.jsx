import React, { useState } from 'react';
import Button from './Button';
import './Calculator.css';
import { useCalcContext } from '../context';
import Display_result from './Display_result';

export default function Calculator() {
    const {next, total} = useCalcContext();

    return (
        <div className="box">
            <div className="wrapper">
                {Display_result(next || total || 0)}
                <div className='btn-container'>
                    <Button type="clean"/>
                    <Button type="sign"/>
                    <Button type="percentage"/>
                    <Button type="operator" value="/"/>
                    <Button type="number" value="7"/>
                    <Button type="number" value="8"/>
                    <Button type="number" value="9"/>
                    <Button type="operator" value="x"/>
                    <Button type="number" value="4"/>
                    <Button type="number" value="5"/>
                    <Button type="number" value="6"/>
                    <Button type="operator" value="-"/>
                    <Button type="number" value="1"/>
                    <Button type="number" value="2"/>
                    <Button type="number" value="3"/>
                    <Button type="operator" value="+"/>
                    <Button type="number" className="grey btn-double" value={0}/>
                    <Button type="number" value='.'/>
                    <Button type="calc"/>
                </div>
            </div>
        </div>
    )
}