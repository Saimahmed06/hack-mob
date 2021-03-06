import React from 'react';
import {
  VStack,
  Button,
  FormControl,
  Input,
  NativeBaseProvider,
  Center
} from 'native-base';

function BuildingAFormExample() {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const validate = () => {
    if (formData.name === undefined) {
      setErrors({
        ...errors,
        name: 'Name is required',
      });
      return false;
    } else if (formData.name.length < 3) {
      setErrors({
        ...errors,
        name: 'Name is too short',
      });
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    validate() ? console.log('Submitted') : console.log('Validation Failed');
  };

  return (
    <VStack width="90%" mx="3">
      <FormControl isRequired isInvalid={'name' in errors}>
        <FormControl.Label _text={{bold: true}}>Name</FormControl.Label>
        <Input
          placeholder="saim"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
        {'name' in errors ?
        <FormControl.ErrorMessage _text={{fontSize: 'xs', color: 'error.500', fontWeight: 500}}>Error</FormControl.ErrorMessage>
:

        <FormControl.HelperText _text={{fontSize: 'xs'}}>
          Name should contain atleast 3 character.
        </FormControl.HelperText>
        }
      </FormControl>




      <FormControl isRequired isInvalid={'name' in errors}>
        <FormControl.Label _text={{ bold: true }}>Father name</FormControl.Label>
        <Input
          placeholder="Father name"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
        {'name' in errors ?
          <FormControl.ErrorMessage _text={{ fontSize: 'xs', color: 'error.500', fontWeight: 500 }}>Error</FormControl.ErrorMessage>
          :

          <FormControl.HelperText _text={{ fontSize: 'xs' }}>
            name should contain character.
          </FormControl.HelperText>
        }
      </FormControl>



      <FormControl isRequired isInvalid={'name' in errors}>
        <FormControl.Label _text={{ bold: true }}>Father name</FormControl.Label>
        <Input
          placeholder="Father name"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
        {'name' in errors ?
          <FormControl.ErrorMessage _text={{ fontSize: 'xs', color: 'error.500', fontWeight: 500 }}>Error</FormControl.ErrorMessage>
          :

          <FormControl.HelperText _text={{ fontSize: 'xs' }}>
            Number should contain character.
          </FormControl.HelperText>
        }
      </FormControl>




      <FormControl isRequired isInvalid={'name' in errors}>
        <FormControl.Label _text={{bold: true}}>Date of birth</FormControl.Label>
        <Input
          placeholder="DOB"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
        {'name' in errors ?
        <FormControl.ErrorMessage _text={{fontSize: 'xs', color: 'error.500', fontWeight: 500}}>Error</FormControl.ErrorMessage>
:

        <FormControl.HelperText _text={{fontSize: 'xs'}}>
          Number should contain atleast 06 numbers.
        </FormControl.HelperText>
        }
      </FormControl>
    <Button onPress={onSubmit} mt="5" colorScheme="cyan">
      Submit
    </Button>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
    <Center flex={1}>
      <BuildingAFormExample />
      </Center>
    </NativeBaseProvider>
  );
}