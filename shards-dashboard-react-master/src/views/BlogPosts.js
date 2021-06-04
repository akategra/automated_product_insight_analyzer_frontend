/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";
import {ExampleChart} from '../components/checkfile/ExampleChart'
import {ExampleChart2} from '../components/checkfile/ExampleChart2'
import { Chart } from "react-google-charts";
import {Combo} from '../components/checkfile/Combo'


import PageTitle from "../components/common/PageTitle";

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);
    const {variable} = this.props;
    alert(variable);

    this.state = {
      // First list of posts.
      PostsListOne: [
        {
          backgroundImage: require("../images/content-management/1.jpeg"),
          category: "bachodi",
          categoryTheme: "dark",
          author: "Anna Kunis",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Conduct at an replied removal an amongst",
          body:
            "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
          date: "28 February 2019"
        },
        
        
      ],

      
    };
  }

  render() {
    const {
      PostsListOne,
      PostsListTwo,
      PostsListThree,
      PostsListFour
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Blog Posts" subtitle="Components" className="text-sm-left" />
        </Row>

        
    <div>
      <Chart
          chartType="ScatterChart"
          data={[["Age", "Weight"], [4, 5.5], [8, 12], [5,8]]}
          width="100%"
          height="400px"
          legendToggle
        />
      <Row>
        <ExampleChart/>
      <ExampleChart2/>
      </Row>
      {/* <Combo/> */}
      
    </div>


        {/* </Row> */}

        

      </Container>
    );
  }
}

export default BlogPosts;
