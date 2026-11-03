import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Account} from '../types';
import {decrypt, encrypt, generateKey} from './crypto':

const KEY_NAME = 'vault_key';
const VAULT_NAME = 'vault_data';

async function getKey(): Promise<string> {
    let key = await SecureStore.getItemAsync(KEY_NAME);
    if (!key) {
        key = generateKey();
        await SecureStore.setItemAsync(KEY_NAME, key);
    }
    return key;
}

