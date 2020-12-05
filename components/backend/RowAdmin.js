import React from 'react';

const RowAdmin = ({ admin }) => {
    const { id, nombre, correo, estado } = admin;

    return (
        <tr>
            <td>
                <div className="d-inline-block align-middle"><img className="img-40 m-r-15 rounded-circle align-top" src="../backend/assets/images/avtar/7.jpg" alt="" />
                    <div className="status-circle bg-primary"></div>
                    <div className="d-inline-block">
                        <span>{nombre.split(' ')[0]}</span>
                        <p className="font-roboto">{nombre.split(' ')[1]}</p>
                    </div>
                </div>
            </td>
            <td className="text-center">{correo}</td>
            <td className="text-right"><i className="fa fa-check-circle"></i>{estado ? ('Activo') : ('Inactivo')}</td>
            <td className="text-right">
                <div>
                    <button className="btn btn-primary p-0 mr-2" style={{width: '3em'}}><i className="fa fa-pencil"></i></button>
                    <button className="btn btn-danger p-0" style={{width: '3em'}}><i className="fa fa-trash"></i></button>
                </div>
            </td>
            {/* <td> <span className="label">$5,08,652</span></td>
            <td className="text-right"><i className="fa fa-check-circle"></i>Done</td> */}
        </tr>
    );
};

export default RowAdmin;