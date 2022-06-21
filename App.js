import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-web';

export default function App() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);

  const onPress = (currentNumber) => {
    if (operation == null) {
      setNumber1(parseInt(Array.from(number1).concat(currentNumber)));
    } else {
      setNumber2(parseInt(Array.from(number2).concat(currentNumber)));
    }
  }

  const reset = (cleanResult) => {
    setNumber1(0);
    setNumber2(0);
    setOperation(null);
    setResult(null);
  }

  const resetNumbers = () => {
    setNumber1(0);
    setNumber2(0);
    setOperation(null);
  }

  const calc = () => {
    switch (operation) {
      case '+':
        setResult(number1 + number2);
        resetNumbers();
        break;
      case '-':
        setResult(number1 - number2);
        resetNumbers();
        break;
      case '*':
        setResult(number1 * number2);
        resetNumbers();
        break;
      case '/':
        setResult(number1 / number2);
        resetNumbers();
        break;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <View style={styles.number1} >
          <Text style={styles.resultText}>{number1 == 0 ? null : number1}</Text>
        </View>
        <View style={styles.operation}>
          <Text style={styles.operationText}>{operation}</Text>
        </View>
        <View style={styles.number2}>
          <Text style={styles.resultText}>
            {result == null ? number2 : result.toFixed(0)}
          </Text>
        </View>
      </View>
      <View style={styles.inline}>
        <View style={[styles.button, styles.topButton]}>
          <TouchableOpacity
            onPress={() => reset(true)}
          >
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.button, styles.topButton]}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>+/-</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.button, styles.topButton]}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.button, styles.operationButton]}>
          <TouchableOpacity
            onPress={() => setOperation('/')}
          >
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inline}>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => onPress(7)}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => onPress(8)}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => onPress(9)}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.button, styles.operationButton]}>
          <TouchableOpacity
            onPress={() => setOperation('*')}
          >
            <Text style={styles.buttonText}>x</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inline}>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => onPress(4)}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => onPress(5)}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => onPress(6)}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.button, styles.operationButton]}>
          <TouchableOpacity
            onPress={() => setOperation('-')}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inline}>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => onPress(1)}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => onPress(2)}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => onPress(3)}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.button, styles.operationButton]}>
          <TouchableOpacity
            onPress={() => setOperation('+')}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inline}>
        <View style={styles.doubleButton}>
          <TouchableOpacity
            onPress={() => onPress(0)}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.button, styles.operationButton]}>
          <TouchableOpacity
            onPress={() => calc()}
          >
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    paddingBottom: 30,
  },
  inline: {
    flex: 'row',
    flexDirection: 'row',
  },
  button: {
    height: 75,
    width: 75,
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    margin: 5,
    backgroundColor: '#333333'
  },
  doubleButton: {
    height: 75,
    width: 150,
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    margin: 5,
    backgroundColor: '#333333'
  },
  result: {
    width: 300,
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  operationButton: {
    backgroundColor: '#fe9500'
  },
  topButton: {
    backgroundColor: '#a6a6a6',
    color: 'gray'
  },
  buttonText: {
    fontSize: 32,
    fontWeight: '300',
    color: '#FFF'
  },
  resultText: {
    fontSize: 90,
    fontWeight: '100',
    color: '#FFF'
  },
  operationText: {
    fontSize: 50,
    fontWeight: '100',
    color: '#FFF',
    justifyText: 'flex-start',
  }

});
