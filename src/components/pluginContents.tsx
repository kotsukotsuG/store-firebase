import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebase from '../firebase';
import { Plugin } from '../types';

const initialPlugin: Plugin = {
  id: 'no.such.plugin',
  image: [],
  description: 'initial',
  name: 'initial',
  terms: 'no term',
  updateDate: null,
  version: '0.0.0',
  company: 'initial',
};
const PluginContents: FC = () => {
  const [plugin, setPlugin] = useState<Plugin>(initialPlugin);
  const { pluginId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const pluginRef = db.doc(`plugins/${pluginId}`);
      const pluginSnapshot = await pluginRef.get();
      setPlugin({ ...pluginSnapshot.data(), id: pluginSnapshot.id } as Plugin);
    };

    fetchData();
  }, [pluginId]);

  return plugin.id === 'no.such.plugin' ? (
    <p>hoge</p>
  ) : (
    <div>
      <main>
        <h2>{plugin.name}</h2>
        <img src={`${plugin.image}`} alt={`${plugin.name}`} />
        <div>{plugin.description}</div>
      </main>
    </div>
  );
};

export default PluginContents;
