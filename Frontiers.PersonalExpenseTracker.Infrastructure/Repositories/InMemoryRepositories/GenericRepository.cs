using Frontiers.PersonalExpenseTracker.Core.Interfaces;
using Frontiers.PersonalExpenseTracker.Core.Interfaces.RepositoriesInterfaces;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Frontiers.PersonalExpenseTracker.Infrastructure.Repositories.InMemoryRepositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class, IEntity
    {
        //It is static for mock porposes, so all instances of the repository share the same data
        private static readonly ConcurrentDictionary<Guid, T> _entities = new ConcurrentDictionary<Guid, T>();

        public void Add(T entity)
        {
            if(_entities.ContainsKey(entity.Id))
                throw new ArgumentException($"Entity with Id {entity.Id} already exists.");
            _entities[entity.Id] = entity;
        }

        public void Delete(Guid id)
        {
            if (_entities.ContainsKey(id) == false)
                throw new ArgumentException($"Entity with Id {id} doesn't exist.");
            _entities.Remove(id, out T? entity);
        }

        public IEnumerable<T> GetAll()
        {
            return _entities.Values.ToList();
        }

        public T? GetById(Guid id)
        {
            if (_entities.ContainsKey(id) == false)
                throw new ArgumentException($"Entity with Id {id} doesn't exist.");
            return _entities[id];
        }

        public void Update(T entity)
        {
            //Here it should update all fields
            if (_entities.ContainsKey(entity.Id) == false)
                throw new ArgumentException($"Entity with Id {entity.Id} doesn't exist.");
            _entities[entity.Id] = entity;
        }
    }
}
