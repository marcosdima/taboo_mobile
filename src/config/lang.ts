import { createLangProvider } from 'alambre';
import { Storage } from '@utils';

const lang = {
  en: {
    hi: 'Hi there!',
    menu: {
      home: 'Home',
      configuration: 'Configuration',
      play: 'Play',
      logIn: 'Log In',
      signIn: 'Sign In',
      exit: 'Exit',
    },
    pages: {
      login: {
        title: 'Log In',
        checkingSession: 'Checking saved session...',
        aliasPlaceholder: 'Enter your alias',
        passwordPlaceholder: 'Enter your password',
        action: 'Log In',
        signInAction: 'Go to Sign In',
        invalidData: 'Alias and password are required',
        success: 'Login successful',
        error: 'Could not log in',
      },
      signIn: {
        title: 'Sign In',
        aliasPlaceholder: 'Create your alias',
        passwordPlaceholder: 'Create your password',
        action: 'Create account',
        invalidData: 'Alias and password are required',
        success: 'Account created',
        error: 'Could not create account',
      },
      home: {
        title: 'Home',
      },
      configuration: {
        title: 'Configuration',
      },
      play: {
        title: 'Play',
        checkingGame: 'Checking active game...',
        alias: 'Alias',
        aliasPlaceholder: 'Enter your alias',
        createServer: 'Create Server',
        joinGame: 'Join Game',
        missingToken: 'You must log in first',
        created: 'Game created successfully',
        error: 'Could not create game',
      },
      enterGame: {
        title: 'Enter Game',
        refresh: 'Refresh Games',
        loading: 'Loading...',
        empty: 'No games available',
        game: 'Game',
        creator: 'Creator',
        missingToken: 'You must log in first',
        error: 'Could not load games',
        joined: 'You joined the game',
      },
      game: {
        title: 'Current Game',
        currentId: 'Game ID',
        error: 'Could not validate active game',
      },
    },
  },
  es: {
    hi: 'Hola!',
    menu: {
      home: 'Inicio',
      configuration: 'Configuración',
      play: 'Jugar',
      logIn: 'Iniciar Sesión',
      signIn: 'Registrarse',
      exit: 'Salir',
    },
    pages: {
      login: {
        title: 'Iniciar Sesión',
        checkingSession: 'Verificando sesión guardada...',
        aliasPlaceholder: 'Ingresa tu alias',
        passwordPlaceholder: 'Ingresa tu contraseña',
        action: 'Iniciar Sesión',
        signInAction: 'Ir a Registrarse',
        invalidData: 'Alias y contraseña son obligatorios',
        success: 'Sesión iniciada correctamente',
        error: 'No se pudo iniciar sesión',
      },
      signIn: {
        title: 'Registrarse',
        aliasPlaceholder: 'Crea tu alias',
        passwordPlaceholder: 'Crea tu contraseña',
        action: 'Crear cuenta',
        invalidData: 'Alias y contraseña son obligatorios',
        success: 'Cuenta creada correctamente',
        error: 'No se pudo crear la cuenta',
      },
      home: {
        title: 'Inicio',
      },
      configuration: {
        title: 'Configuración',
      },
      play: {
        title: 'Jugar',
        checkingGame: 'Verificando partida activa...',
        alias: 'Alias',
        aliasPlaceholder: 'Ingresa tu alias',
        createServer: 'Crear Servidor',
        joinGame: 'Unirse a Partida',
        missingToken: 'Debes iniciar sesión primero',
        created: 'Partida creada correctamente',
        error: 'No se pudo crear la partida',
      },
      enterGame: {
        title: 'Entrar a Partida',
        refresh: 'Actualizar Partidas',
        loading: 'Cargando...',
        empty: 'No hay partidas disponibles',
        game: 'Partida',
        creator: 'Creador',
        missingToken: 'Debes iniciar sesión primero',
        error: 'No se pudieron cargar las partidas',
        joined: 'Te uniste a la partida',
      },
      game: {
        title: 'Partida Actual',
        currentId: 'ID de Partida',
        error: 'No se pudo validar la partida activa',
      },
    },
  },
};

export const {
  LangProvider,
  useLang,
} = createLangProvider(lang, Storage);
