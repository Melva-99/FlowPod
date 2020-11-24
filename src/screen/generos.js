import React, { useEffect, useState } from 'react';
import {Container, Header, Spinner, Item, Input, Icon, Button, Text, View, Body, Content, List,ListItem} from 'native-base';
import {StyleSheet, ScrollView, Image,} from 'react-native';
import backend from '../api/backend';
import getEnvVars from '../../enviorment';
import axios from "axios";


const genero =() => {
    return (
            <Container>
              <Header>
                <Text>Géneros</Text>
                </Header>
              <Content>
                <List>
                  <ListItem>
                    <Text>Documental</Text>
                  </ListItem>                    
                  <ListItem>
                    <Text>Ciencia - Ficción</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Aventura</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Investigación</Text>
                  </ListItem>  
                  <ListItem>
                    <Text>Comedia</Text>
                  </ListItem>
                </List>
              </Content>
            </Container>
    );
  }


export default genero;