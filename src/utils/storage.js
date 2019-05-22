import AsyncStorage from '@react-native-community/async-storage';
import tron from 'reactotron-react-native';

export default {
  getItem: async (key) => {
    const item = await AsyncStorage.getItem(key);
    tron.display({ name: 'ASYNC STORAGE', preview: `getItem ${key}`, value: { key, item: JSON.parse(item) } });
    return JSON.parse(item);
  },
  setItem: async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value)).then(() => tron.display({
      name: 'ASYNC STORAGE',
      value: { key, value },
      preview: `setItem ${key}`,
    })).catch(err => tron.display({
      name: 'ASYNC STORAGE ERROR',
      preview: `setItem ${key}`,
      value: { key, err },
      important: true
    }))
  },
  removeItem: async (key) => {
    await AsyncStorage.removeItem(key);
    tron.display({ name: 'ASYNC STORAGE', preview: `removeItem ${key}` });
  },
  getAllItens: async () => {
    await AsyncStorage.getAllKeys().then(async (res) => {
      let itens = [];
      await res.map(async (el, i, arr) => {
        if (i === 0)
          return;
        await AsyncStorage.getItem(el).then(res => itens.push({ key: el, value: JSON.parse(res) })).catch(err => tron.display({
          name: 'ASYNC STORAGE ERROR',
          preview: `getAllItens ${el}`,
          value: err
        }));
        i === arr.length - 1 ? tron.display({ name: 'ASYNC STORAGE', preview: `getAllItens`, value: { itens } }) : null;
      });
    })
  },
  clear: async () => {
    await AsyncStorage.clear();
    tron.display({ name: 'ASYNC STORAGE', preview: `clear` });
  },
};