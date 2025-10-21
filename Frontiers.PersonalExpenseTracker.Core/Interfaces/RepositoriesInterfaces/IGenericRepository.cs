﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Frontiers.PersonalExpenseTracker.Core.Interfaces.RepositoriesInterfaces
{
    public interface IGenericRepository<T> where T : class, IEntity
    {
        IEnumerable<T> GetAll();
        T? GetById(Guid id);
        void Add(T entity);
        void Update(T entity);
        void Delete(Guid id);
    }
}
