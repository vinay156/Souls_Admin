import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import TeamData from './TeamData'

function TeamRow(props) {
    const team = props.team
    const teamLink = `/team/${team.id}`
  
    const getBadge = (status) => {
      return status === 'Active' ? 'success' :
        status === 'Inactive' ? 'secondary' :
          status === 'Pending' ? 'warning' :
            status === 'Banned' ? 'danger' :
              'primary'
    }
  
    return (
      <tr key={team.id.toString()}>
        <th>{team.id}</th>
        {/* <th scope="row"><Link to={teamLink}>{team.id}</Link></th> */}
        <td><Link to={teamLink}>{team.name}</Link></td>
        <td>{team.email}</td>
        <td>{team.mobile}</td>
        <td>{team.registered}</td>
        <td>{team.role}</td>
        <td><Link to={teamLink}><Badge color={getBadge(team.status)}>{team.status}</Badge></Link></td>
      </tr>
    )
  }

class ViewTeam extends Component {
    render() {

        const teamList = TeamData.filter((team) => team.id < 10)
    
        return (
          <div className="animated fadeIn">
            <Row>
              <Col xl={8}>
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i> Team <small className="text-muted">Members</small>
                  </CardHeader>
                  <CardBody>
                    <Table responsive hover>
                      <thead>
                        <tr>
                          <th scope="col">id</th>
                          <th scope="col">name</th>
                          <th scope="col">email</th>
                          <th scope="col">mobile</th>
                          <th scope="col">registered</th>
                          <th scope="col">role</th>
                          <th scope="col">status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {teamList.map((team, index) =>
                          <TeamRow key={index} team={team}/>
                        )}
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        )
      }
    }
 
export default ViewTeam;