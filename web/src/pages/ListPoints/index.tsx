import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import Pagination from '../../components/Pagination';

import './styles.css';

import logo from '../../assets/logo.svg';

interface Point {
    id: number;
    name: string;
    city: string;
    uf: string;
    image_url: string;
}

interface IBGEUFResponse {
    sigla: string;
}

interface IBGECityResponse {
    nome: string;
}

const ListPoint = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pointsPerPage] = useState(6);

    const [points, setPoints] = useState<Point[]>([]);

    useEffect(() => {
      api.get('points').then(response => {
        setPoints(response.data.serializedAllPoints);
      })
    }, []);

    // Get current points
    const indexOfLastPoint = currentPage * pointsPerPage;
    const indexOfFirstPoint = indexOfLastPoint - pointsPerPage;
    const currentPoints = points.slice(indexOfFirstPoint, indexOfLastPoint);

    // Change page
    const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

    return (
        <div id="page-list-point">
            <header>
                <img src={logo} alt="Ecoleta" />

                <Link to="/create-point">
                    <FiArrowLeft />
                    Cadastrar outro ponto
                </Link>
            </header>

            <form>
                <h1>Lista dos pontos de coleta</h1>

                <fieldset>
                    <legend>
                        <h2>{points.length + ` `}pontos de coleta</h2>
                        <span>Lista de todos os pontos cadastrados</span>
                    </legend>

                    <ul className="points-grid">
                      {currentPoints.map(point => (
                      <li key={point.id}>
                          <img src={point.image_url} alt={point.name} />
                          <span>
                            <strong>
                            { point.name.length > 15
                              ? point.name.substring(0, 35) + '...'
                              : point.name
                            }
                            </strong><br />{point.uf}/
                            { point.city.length > 10
                              ? point.city.substring(0, 15) + '...'
                              : point.city
                            }
                          </span>
                      </li>
                      ))}
                  </ul>

                  <Pagination
                    pointsPerPage={pointsPerPage}
                    totalPoints={points.length}
                    paginate={paginate} />
                </fieldset>

            </form>
        </div>
    );
};

export default ListPoint;
